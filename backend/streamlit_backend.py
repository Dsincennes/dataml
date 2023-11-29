# streamlit_backend.py
import streamlit as st
import pandas as pd
import seaborn as sns
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np
import matplotlib.pyplot as plt
import datetime

# Set page title and icon
st.set_page_config(
    page_title="Viral Video Analysis",
    page_icon="files/analysis.png",
    layout="wide"
)

header_image = 'https://www.netbase.com/wp-content/uploads/Social-Media-Analytics-Guide.png'  # Replace with the actual URL of your header image

# Use st.markdown with HTML to set the width to 100% and the height to a fixed value
st.markdown(
    f'<img src="{header_image}" alt="header image" style="width:100%;height:400px;">',
    unsafe_allow_html=True
)

# Page 1: Introduction
if 'run_analysis' not in st.session_state:
    st.session_state.run_analysis = False

if not st.session_state.run_analysis:
    st.write("""
    # 🚀 Welcome to Viral Video Analysis! 🎥

    In this analysis, we use a linear regression model to predict the engagement rate of YouTube videos based on various factors such as 'View Count,' 'Likes,' 'Comments,' and the time of upload.

    ## Why Linear Regression?

    Linear regression is a statistical method that models the relationship between a dependent variable (in this case, 'Engagement Rate') and one or more independent variables ('View Count,' 'Likes,' 'Comments,' etc.). It assumes a linear relationship between the variables and is suitable for predicting a numeric outcome.

    ## How Does It Work?

    1. **Pair Plots:** We start by visualizing the relationships between 'Engagement Rate' and each factor ('View Count,' 'Likes,' 'Comments') using pair plots. These plots help us understand how these factors influence engagement.

    2. **Data Scaling:** To ensure fair comparisons, we scale the numeric columns using Min-Max scaling, bringing all values into a common range.

    3. **User Input:** You can input the details of a new video, and the model will predict its engagement rate based on the patterns observed in the existing data.

    4. **Insights:** The analysis provides actionable insights based on the predicted engagement rate, helping you optimize future video content for maximum engagement.

    Click the 'Next' button to proceed with the analysis. 🚀
    """)

    if st.button("Next"):
        st.session_state.run_analysis = True

# Page 2: Analysis
if st.session_state.run_analysis:
    # Load the dataset
    df = pd.read_excel('files/viral_videos_data.xlsx')

    # Convert 'Upload Date' to datetime format
    df['Upload Date'] = pd.to_datetime(df['Upload Date'])

    # Extract relevant features
    df['Year'] = df['Upload Date'].dt.year
    df['Month'] = df['Upload Date'].dt.month
    df['DayOfWeek'] = df['Upload Date'].dt.dayofweek

    # Drop the original 'Upload Date' column
    df.drop(columns=['Upload Date'], inplace=True)

    # Check for missing values
    missing_values = df.isna().sum()

    # Drop rows with missing values
    df.dropna(inplace=True)

    # Fill missing values with a specific value (e.g., 0)
    df.fillna(0, inplace=True)

    df.drop_duplicates(inplace=True)

    # Initialize MinMaxScaler
    scaler = MinMaxScaler()

    # Scale the numeric columns
    columns_to_scale = ['View Count', 'Likes', 'Comments', 'Year', 'Month', 'DayOfWeek']
    df[columns_to_scale] = scaler.fit_transform(df[columns_to_scale])

    # Sidebar
    st.sidebar.title("User Inputs")

    # Create an empty container for dynamic content
    container = st.empty()

    # Display text asking the user to input data
    container.subheader("Enter Video Details on the Left to proceed: 📊")

    new_view_count = st.sidebar.number_input("Enter View Count", value=1000000)
    new_likes = st.sidebar.number_input("Enter Likes", value=50000)
    new_comments = st.sidebar.number_input("Enter Comments", value=1000)
    new_date = st.sidebar.date_input("Select Date", value=datetime.date.today())

    # Run analysis button
    if st.sidebar.button("Run Analysis"):
        # Clear the input message
        container.empty()

        # Create a new DataFrame for the user's input
        new_video_data = pd.DataFrame({
            'View Count': [new_view_count],
            'Likes': [new_likes],
            'Comments': [new_comments],
            'Upload Date': [new_date],
        })

        # Convert 'Upload Date' to datetime format
        new_video_data['Upload Date'] = pd.to_datetime(new_video_data['Upload Date'])

        # Extract relevant features
        new_video_data['Year'] = new_video_data['Upload Date'].dt.year
        new_video_data['Month'] = new_video_data['Upload Date'].dt.month
        new_video_data['DayOfWeek'] = new_video_data['Upload Date'].dt.dayofweek

        # Drop the original 'Upload Date' column
        new_video_data.drop(columns=['Upload Date'], inplace=True)

        # Scale the numeric columns
        new_video_data[columns_to_scale] = scaler.transform(new_video_data[columns_to_scale])

        # Display separate pair plots for each factor in a 1x3 matrix
        st.subheader("Pair Plots of Engagement Rates for Each Factor 📈")

        factors = ['View Count', 'Likes', 'Comments']

        # Create a 1x3 grid
        fig, axes = plt.subplots(1, 3, figsize=(15, 5))

        # Loop through each factor and plot the pair plot
        for i in range(3):
            factor = factors[i]
            # Scatter plots for 'Engagement Rate' vs 'View Count', 'Likes,' and 'Comments'
            sns.scatterplot(x=factor, y='Engagement Rate', data=df, ax=axes[i])

            # Annotate each point with the actual values
            for index, row in df.iterrows():
                axes[i].text(row[factor], row['Engagement Rate'], str(round(row[factor], 2)))

        # Set plot titles
        axes[0].set_title('Engagement Rate vs View Count')
        axes[1].set_title('Engagement Rate vs Likes')
        axes[2].set_title('Engagement Rate vs Comments')

        # Adjust layout
        plt.tight_layout()

        # Show the plot
        st.pyplot(fig)

        st.write("""
    ### Understanding the Pair Plots 📊

    These pair plots provide a visual representation of how different factors, such as 'View Count,' 'Likes,' and 'Comments,' relate to the 'Engagement Rate.' Here are some key takeaways:

    1. **View Count vs Engagement Rate:**
       - Explore how the number of views correlates with the engagement rate.
       - Pay attention to videos with a high engagement rate compared to the total view count.

    2. **Likes vs Engagement Rate:**
       - Analyze the impact of likes on the engagement rate.
       - Notice patterns where videos with a specific number of likes tend to have higher engagement.

    3. **Comments vs Engagement Rate:**
       - Investigate the relationship between the number of comments and the engagement rate.
       - Identify trends where videos with more comments tend to have higher engagement.

    Use these insights to optimize your video content strategy and enhance the chances of creating viral videos. Adjusting these key factors can positively impact your video's engagement rate.
    """)
        # Instantiate the linear regression model
        model = LinearRegression()

        # Split the data
        X = df[['View Count', 'Likes', 'Comments', 'Year', 'Month', 'DayOfWeek']]
        y = df['Engagement Rate']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train the model on the training data
        model.fit(X_train, y_train)

        # Make predictions for the new video
        predicted_engagement_rate = model.predict(new_video_data)[0]

        # Display predictions in a styled box
        st.write("## Predicted Engagement Rate for the New Video:")
        st.success(f"Predicted Engagement Rate: {predicted_engagement_rate:.2%} 🎉")

        # Display analysis results
        st.write("## Analysis Results: 📈")

        # Provide additional insights based on the predicted engagement rate
        st.write(f"""
        ### What Does This Mean? 🤔

        An engagement rate of {predicted_engagement_rate:.2%} indicates that approximately {predicted_engagement_rate:.2%} of your audience is actively interacting with your video content. This is a positive sign, suggesting that your video has successfully captured the attention and interest of viewers.

        ### Actionable Insights: 🚀

        - **Optimize Content:** Consider analyzing the elements that contribute to this engagement. Are there specific topics, visuals, or styles that resonate well with your audience? Use these insights to optimize future content.

        - **Encourage Interaction:** Since your audience is engaging, encourage them to like, comment, and share. Building an interactive community can boost your video's reach.

        Remember, these insights are valuable for refining your content strategy and maximizing engagement. Keep up the great work! 👏
        """)

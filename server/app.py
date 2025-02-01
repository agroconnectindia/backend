from flask import Flask, jsonify
from modules.weather import weatherinfo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!<br><a href="/weather">Go to Weather Module</a>'

# @app.route('/weather')
# def weather():
#     return 'Weather Module'
@app.route('/weather',methods=['GET'])
def weather():
    temp = weatherinfo()
    return jsonify({'temperature': temp})

if __name__ == '__main__':
    app.run(debug=True)











'''
Backend things to define:
# Dashboard Start
1. Weather
    i. Temperature
    ii. Humidity
    iii. Wind Speed
    iv. Weather Condition
2. Statitics
    i. Net Profit
3. Farm Quaterly Record
    i. Current Crop
    ii. Soil Type
    iii. Water Level
    iv. Fertilizer Level
    v. Pesticide Level
    vi. Market Rate
4. Seed Information
    i. Seed Name
    ii. Seed Type
    iii. Seed Price
    iv. Seed Quantity
    v. Seed Quality
5. Egg Production
    i. Today's Egg Production
    ii. Total Egg Production [week]
    iii. % compared to last week
6. Milk Production
    i. Today's Milk Production
    ii. Total Milk Production [week]
    iii. % compared to last week
7. Latest News
    i. News Headline
    ii. News Description
    iii. News Source
    iv. News Date
# Dashboard Complete
# Recommendation Start
1. Soil Information
    i. Soil Type
    ii. Soil % for crop
    iv. Soil Fertility
2. Crop Information
    i. Crop Name
    ii. Crop Type
    iii. Crop water requirement
    iv. Crop sunlight requirement
3. Pesticide Information
    i. Interval [days]
    ii. Pesticide Name
    iii. Pesticide Type
    iv. short description
    v. Buy Now
4. Urea Information
    i. Interval [days]
    ii. Urea Name
    iii. Urea Type
    iv. short description
    v. Buy Now
5. Next season Crop
    i. Crop Name
    ii. Crop Type
    iii. Interval [days]
    iv. short description
# Recommendation Complete
# Latest News Start
1. Join News with WP
2. News Headline
3. News Description
4. News Source
5. News Date
# Latest News Complete
# Report Start
1. Yearly Income Chart
2. Milk income table
    i. Month
    ii. Total Quantity
    iii. Average Rate
    iv. Total Income
3. Egg income table
    i. Month
    ii. Total Quantity
    iii. Average Rate
    iv. Total Income
# Report Complete
# MarketPlace Start
    1. Redirect to MarketPlace
# MarketPlace Complete
# About Start
    1. About Us
    2. Contact Us
    3. Privacy Policy
    4. Terms and Conditions
# About Complete
# Profile Start
    1. Profile Information
    2. Change Password
    3. Logout
# Profile Complete
# Login Start
    1. Login
    2. Register
# Login Complete
'''
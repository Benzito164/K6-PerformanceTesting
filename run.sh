#!/bin/bash
# Find all .js files in the Tests folder and its subfolders
find . -type f -name "*.js" | while read -r js_file; do
    # Run the k6 command for each .js file
     # k6 run "$js_file"&

while getopts e:t:f: flag
do
    case "${flag}" in
        e) environment=${OPTARG};;
        t) test_type=${OPTARG};;
        f) fullname=${OPTARG};;
    esac
done
#echo "Username: $username";
#echo "Age: $age";
#echo "Full Name: $fullname";
echo "K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html a6 run -e TESTTYPE=$test_type -e ENVIRONMENT=$environment $js_file"
#echo "The first $age $username: $1"
done

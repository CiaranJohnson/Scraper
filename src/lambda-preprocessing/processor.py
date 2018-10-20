import os
import io
import boto3
import json
import csv
from textblob import TextBlob

ENDPOINT_NAME = " / TODO: get endpoint name "

def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))
    data = json.loads(json.dumps(event))

def invokeEndpoint(data):
    return 1

def parseJson(data):
    return 1
  
def getObjectivity(text):
    return 1

def getSubjectivity(text):
    return 1
  
def getSize(text):
    return 1
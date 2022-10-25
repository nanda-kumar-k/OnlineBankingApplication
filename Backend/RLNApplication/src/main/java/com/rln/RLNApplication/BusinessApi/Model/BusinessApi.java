package com.rln.RLNApplication.BusinessApi.Model;

public class BusinessApi 
{
   private String ApiKey;
   private String authkey;
   private  String ApiCreateddate;
public String getApiKey() {
	return ApiKey;
}
public void setApiKey(String apiKey) {
	ApiKey = apiKey;
}
public String getAuthkey() {
	return authkey;
}
public void setAuthkey(String authkey) {
	this.authkey = authkey;
}
public String getApiCreateddate() {
	return ApiCreateddate;
}
public void setApiCreateddate(String apiCreateddate) {
	ApiCreateddate = apiCreateddate;
}
@Override
public String toString() {
	return "BusinessApi [ApiKey=" + ApiKey + ", authkey=" + authkey + ", ApiCreateddate=" + ApiCreateddate + "]";
}
}

package com.rln.RLNApplication.Transcations.Model;

public class Transcations
{
  private int ld;
  private String date;
  private String senderaccountnumber;
  private String reciveraccountnumber;
  private String amount;
  private String transcationstatus;
public int getLd() {
	return ld;
}
public void setLd(int ld) {
	this.ld = ld;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getSenderaccountnumber() {
	return senderaccountnumber;
}
public void setSenderaccountnumber(String senderaccountnumber) {
	this.senderaccountnumber = senderaccountnumber;
}
public String getReciveraccountnumber() {
	return reciveraccountnumber;
}
public void setReciveraccountnumber(String reciveraccountnumber) {
	this.reciveraccountnumber = reciveraccountnumber;
}
public String getAmount() {
	return amount;
}
public void setAmount(String amount) {
	this.amount = amount;
}
public String getTranscationstatus() {
	return transcationstatus;
}
public void setTranscationstatus(String transcationstatus) {
	this.transcationstatus = transcationstatus;
}
@Override
public String toString() {
	return "Transcations [ld=" + ld + ", date=" + date + ", senderaccountnumber=" + senderaccountnumber
			+ ", reciveraccountnumber=" + reciveraccountnumber + ", amount=" + amount + ", transcationstatus="
			+ transcationstatus + "]";
} 
  
}

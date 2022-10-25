package com.rln.RLNApplication.Deposits.Model;

public class Deposits
{
   private int id;
   private String startingdate;
   private String endingdate;
   private String withdrwal;
   private long intrest;
   private String AmountDeposit;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getStartingdate() {
	return startingdate;
}
public void setStartingdate(String startingdate) {
	this.startingdate = startingdate;
}
public String getEndingdate() {
	return endingdate;
}
public void setEndingdate(String endingdate) {
	this.endingdate = endingdate;
}
public String getWithdrwal() {
	return withdrwal;
}
public void setWithdrwal(String withdrwal) {
	this.withdrwal = withdrwal;
}
public long getIntrest() {
	return intrest;
}
public void setIntrest(long intrest) {
	this.intrest = intrest;
}
public String getAmountDeposit() {
	return AmountDeposit;
}
public void setAmountDeposit(String amountDeposit) {
	AmountDeposit = amountDeposit;
}
@Override
public String toString() {
	return "Deposits [id=" + id + ", startingdate=" + startingdate + ", endingdate=" + endingdate + ", withdrwal="
			+ withdrwal + ", intrest=" + intrest + ", AmountDeposit=" + AmountDeposit + "]";
}
}

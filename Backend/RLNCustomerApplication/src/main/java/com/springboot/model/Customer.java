package com.springboot.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="rlncustomer_table")
public class Customer 
{
	@Id
   private   int Customer_id;
   private int AccountNumber;
   /*private String FirsrName;
   private String LastName;
   private String ContactNumber;
   private String Emailid;
   private String password;
   private String Accounttype;*/
   
}

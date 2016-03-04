package com.infy.bank.service;

public interface BankServiceImpl {
	
	//Personal Details methods
	public String savePersonalDetails(String s);
	public void getPersonalDetails();
	//Contact Details Methods
	public String saveContactsDetails(String s);
	public void getContactDetails();
	//Financial Details
	public String saveFinancialDetails(String s);
	public void getFinancialDetails();

	

}

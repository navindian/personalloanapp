package com.infy.bank.pojo;

import java.util.Date;

public class PersonalDeatilsPojo {
	
	private Integer CustomerId;
	private String tittle;
	private String firstName;
	private String lastName;
	private String pancard;
	private String fsName;
	private String MaidenName;
	private String pvdId;
	private Date dob;
	private String gender;
	private String staus;
	private String nationality;
	private String category;
	public Date getTodaysDate() {
		return TodaysDate;
	}
	public void setTodaysDate(Date todaysDate) {
		TodaysDate = todaysDate;
	}
	private String education;
	private String maritalstatus;
	private Date TodaysDate;
	
	public Integer getCustomerId() {
		return CustomerId;
	}
	public void setCustomerId(Integer customerId) {
		CustomerId = customerId;
	}
	public String getTittle() {
		return tittle;
	}
	public void setTittle(String tittle) {
		this.tittle = tittle;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPancard() {
		return pancard;
	}
	public void setPancard(String pancard) {
		this.pancard = pancard;
	}
	public String getFsName() {
		return fsName;
	}
	public void setFsName(String fsName) {
		this.fsName = fsName;
	}
	public String getMaidenName() {
		return MaidenName;
	}
	public void setMaidenName(String maidenName) {
		MaidenName = maidenName;
	}
	public String getPvdId() {
		return pvdId;
	}
	public void setPvdId(String pvdId) {
		this.pvdId = pvdId;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getStaus() {
		return staus;
	}
	public void setStaus(String staus) {
		this.staus = staus;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getMaritalstatus() {
		return maritalstatus;
	}
	public void setMaritalstatus(String maritalstatus) {
		this.maritalstatus = maritalstatus;
	}
	

}

package com.infy.bank.controller;

import java.io.IOException;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.infy.bank.pojo.PersonalDeatilsPojo;

@RestController
public class BankController {

	@RequestMapping(value = "/getCustomerPersonal", method = RequestMethod.POST)
	public void getPersonalDetails(@RequestBody String json) throws JsonParseException, JsonMappingException, IOException {
		System.out.println("inside customer service savepersonaldetails method" + json);
		/*
		 * //http://localhost:8001/AngularjsPoc/ PersonalDeatilsPojo
		 * pojo=(PersonalDeatilsPojo)new ObjectMapper().readValue(json,
		 * PersonalDeatilsPojo.class); System.out.println(pojo.getFirstName());
		 */

		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		PersonalDeatilsPojo pojo = (PersonalDeatilsPojo) mapper.readValue(json, PersonalDeatilsPojo.class);
		System.out.println(pojo.getFirstName());
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public void getPersonalDetailsTest() throws JsonParseException, JsonMappingException, IOException {
		System.out.println("inside  getPersonalDetailsTest method");
		
		 
	}

}

package com.infy.bank.service;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.infy.bank.pojo.PersonalDeatilsPojo;
 
@Path("/customer")
public class CustomerService {
	@POST
	@Path("/saveCustomerPersonal")
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public String savePersonalDetails(String json) throws  JsonMappingException, IOException
	{
		System.out.println("inside customer service savepersonaldetails method"+json);
		/*//http://localhost:8001/AngularjsPoc/
		PersonalDeatilsPojo pojo=(PersonalDeatilsPojo)new ObjectMapper().readValue(json, PersonalDeatilsPojo.class);
		System.out.println(pojo.getFirstName());*/
		
		ObjectMapper mapper=new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        PersonalDeatilsPojo pojo=(PersonalDeatilsPojo)mapper.readValue(json, PersonalDeatilsPojo.class);
        System.out.println(pojo.getFirstName());

		
		return "success";
		
	
		
	}
	
	
}

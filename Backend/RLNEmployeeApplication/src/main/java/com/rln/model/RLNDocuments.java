package com.rln.model;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table

public class RLNDocuments {
	
	@Id
	@GeneratedValue
	private int doc_id;
	private UUID connection_id;
	private String name;
	private String type;
	@Lob
	private byte[] data;
	
	public RLNDocuments () {
		
	}

}

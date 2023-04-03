package generation.javongus.html.model;

import java.util.HashSet;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "direcciones")
public class Direccion {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
//	 
	 private String calle;
	 private String colonia;
	 private Integer cp;
	 private String estado;
	 private String municipio;
	 
	 @ManyToMany(mappedBy = "direcciones")
	 private Set<Usuario> usuarios = new HashSet<>();
	 

	public Direccion() {
		
	}

	public Direccion(Long id, String calle, String colonia, Integer cp, String estado, String municipio,
			Set<Usuario> usuarios) {
		
		this.id = id;
		this.calle = calle;
		this.colonia = colonia;
		this.cp = cp;
		this.estado = estado;
		this.municipio = municipio;
		this.usuarios = usuarios;
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public String getColonia() {
		return colonia;
	}

	public void setColonia(String colonia) {
		this.colonia = colonia;
	}

	public Integer getCp() {
		return cp;
	}

	public void setCp(Integer cp) {
		this.cp = cp;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getMunicipio() {
		return municipio;
	}

	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	public Set<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(Set<Usuario> usuarios) {
		this.usuarios = usuarios;
	}

	@Override
	public String toString() {
		return "Direccion [id=" + id + ", calle=" + calle + ", colonia=" + colonia + ", cp=" + cp + ", estado=" + estado
				+ ", municipio=" + municipio + ", usuarios=" + usuarios + "]";
	}
	
	
	
	 
}

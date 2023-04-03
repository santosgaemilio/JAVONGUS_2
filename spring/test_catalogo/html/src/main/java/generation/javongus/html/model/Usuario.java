package generation.javongus.html.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios")
public class Usuario {
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;
	  private String nombre;
	  private String apellido;
	  
	  @Column(unique = true)
	  private String correo;
	  
	  private String password;
	  private String telefono;
	  
	  @ManyToMany(cascade = CascadeType.ALL)
	  @JoinTable(name = "usuarios_direcciones",
			  joinColumns = @JoinColumn(name = "usuario_id"),
			  inverseJoinColumns = @JoinColumn(name = "direccion_id")
	  )
	  private Set<Direccion> direcciones = new HashSet<>();
	 

	public Usuario() {
		
	}

	public Usuario(Long id, String nombre, String apellido, String correo, String password, String telefono,
			Set<Direccion> direcciones) {
		
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.password = password;
		this.telefono = telefono;
		this.direcciones = direcciones;
	}
	
	

	
	public Usuario(Long id, String nombre, String apellido, String correo, String password, String telefono) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.password = password;
		this.telefono = telefono;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public Set<Direccion> getDirecciones() {
		return direcciones;
	}

	public void setDirecciones(Set<Direccion> direcciones) {
		this.direcciones = direcciones;
	}
	
	
	  
	  
}

package generation.javongus.html.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "producto")
public class Producto {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="id", unique = true, nullable = false) 
	private Long id;
	private String nombre;
	private String descripcion;
	private Integer cantidad;
	private Double precio;
	private Integer target;
	private String tipo;
	private Long marca_id;
	
	
//	CONSTRUCTORES
//	vacio
	public Producto() {
		
	}
	
//	completo
	public Producto(Long id, String nombre, String descripcion, Integer cantidad, Double precio, Integer target,
			String tipo, Long marca_id) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
		this.target = target;
		this.tipo = tipo;
		this.marca_id = marca_id;
	}
//	GETTER AND SETTER

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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Integer getTarget() {
		return target;
	}

	public void setTarget(Integer target) {
		this.target = target;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	
	public Long getMarca_id() {
		return marca_id;
	}

	public void setMarca_id(Long marca_id) {
		this.marca_id = marca_id;
	}

	//	toString
	@Override
	public String toString() {
		return "Producto [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", cantidad=" + cantidad
				+ ", precio=" + precio + ", target=" + target + ", tipo=" + tipo + "]";
	}
	

	
	
	

	
	
	
	
	
	
	
}

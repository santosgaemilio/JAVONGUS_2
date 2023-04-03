package generation.javongus.html.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import generation.javongus.html.model.Producto;
import generation.javongus.html.services.ProductoServices;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", 
methods = { RequestMethod.GET, RequestMethod.POST, 
		RequestMethod.DELETE, RequestMethod.PUT })

@RestController
@RequestMapping(path = "/html/producto/")
public class ProductoController {
	
	private final ProductoServices productoSer;
	
	@Autowired
	public ProductoController(ProductoServices productoSer) {
		this.productoSer = productoSer;
	}
	
//	HTTP GET
	@GetMapping
	public List<Producto> getProducto() {
		return productoSer.leerProductos();
	}
	
	@GetMapping(path = "/sorted/{order}")
	public List<Producto> getProductoO(@PathVariable("order") Integer order) {
		return productoSer.leerProductosO(order);
	}
	
	@GetMapping(path = "/{prodId}") 
	public Producto getProducto(@PathVariable("prodId") Long prodId) {
		return productoSer.leerProducto(prodId);
	}
	
	@GetMapping(path = "/filter")
	public List<Producto> getProducto(@RequestParam("start") Double start,@RequestParam("end") Double end){
		return productoSer.precioProducto(start, end);
	}
	@GetMapping(path = "/marca/{marca_id}") 
	public List<Producto> getProductoM(@PathVariable("marca_id") Long marca_id) {
		return productoSer.leerProductosM(marca_id);
	}
	@GetMapping(path = "/tipo/{tipo}") 
	public List<Producto> getProductoT(@PathVariable("tipo") String tipo) {
		return productoSer.leerProductosT(tipo);
	}
	@GetMapping(path = "/target/{target}") 
	public List<Producto> getProductoTa(@PathVariable("target") Integer target) {
		return productoSer.leerProductosTa(target);
	}
	
//	HTTP POST
	@PostMapping
	public void postProducto(@RequestBody Producto producto) {
		productoSer.crearProducto(producto);
	}
//	HTTP PUT
	@PutMapping(path = "{prodId}") 
	public void putProducto(@PathVariable("prodId") Long prodId,
			@RequestParam(required = false) String nombre, 
			@RequestParam(required = false) String descripcion,
			@RequestParam(required = false) Double precio,
			@RequestParam(required = false) Integer cantidad,
			@RequestParam(required = false) Integer target,
			@RequestParam(required = false) String tipo,
			@RequestParam(required = false) Long marcaId) {
		productoSer.actualizarProducto(prodId, nombre, descripcion, cantidad, precio, target, tipo, marcaId);
	}
//	HTTP DELETE
	@DeleteMapping(path = "{prodId}")
	public void deleteProducto(@PathVariable("prodId") Long prodId) {
		productoSer.borrarProducto(prodId);
	}
}

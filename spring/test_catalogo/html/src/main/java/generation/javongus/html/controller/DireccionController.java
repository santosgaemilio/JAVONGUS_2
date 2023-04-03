package generation.javongus.html.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import generation.javongus.html.model.Direccion;
import generation.javongus.html.services.DireccionServices;

@CrossOrigin(origins = "*", 
methods = { RequestMethod.GET, RequestMethod.POST, 
		RequestMethod.DELETE, RequestMethod.PUT })
@RestController
@RequestMapping(path = "/html/direccion/")
public class DireccionController {
	
	private final DireccionServices direccionSer;
	
	@Autowired
	public DireccionController(DireccionServices direccionSer) {
		this.direccionSer = direccionSer;
	}
	
//	GET
	@GetMapping
	public List<Direccion> getDireccion() {
		return direccionSer.leerDirecciones();
	}
	
	@GetMapping(path = "/{direccionId}") 
	public Direccion getUsuario(@PathVariable("direccionId") Long direccionId) {
		return direccionSer.leerDireccion(direccionId);
	}
	
//	POST
	@PostMapping
	public void postDireccion(@RequestBody Direccion direccion) {
		direccionSer.crearDireccion(direccion);
	}
	
//	DELETE
	@DeleteMapping(path = "{direccionId}")
	public void deleteDireccion(@PathVariable("direccionId") Long direccionId) {
		direccionSer.borrarDireccion(direccionId);
	}

	
	
}

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import generation.javongus.html.model.Usuario;
import generation.javongus.html.model.UsuarioDireccionDTO;
import generation.javongus.html.services.UsuarioServices;

@CrossOrigin(origins = "*", 
methods = { RequestMethod.GET, RequestMethod.POST, 
		RequestMethod.DELETE, RequestMethod.PUT })
@RestController
@RequestMapping(path = "/html/usuario/")
public class UsuarioController {
	private final UsuarioServices usuarioSer;

	@Autowired
	public UsuarioController(UsuarioServices usuarioSer) {
		super();
		this.usuarioSer = usuarioSer;
	}
	
//	GET
	@GetMapping
	public List<Usuario> getUsuario() {
		return usuarioSer.leerUsuarios();
	}
	@GetMapping(path = "/{userId}") 
	public Usuario getUsuario(@PathVariable("userId") Long userId) {
		return usuarioSer.leerUsuario(userId);
	}
	
//	POST
	@PostMapping
	public void postUsuario(@RequestBody Usuario usuario) {
		usuarioSer.crearUsuario(usuario);
	}
	@PostMapping(path = "/create-with-direccion")
	public void createUsuarioWithDireccion(@RequestBody UsuarioDireccionDTO usuarioDireccionDTO) {
        usuarioSer.createUsuarioWithDireccion(usuarioDireccionDTO);
    }
//	PUT
	@PutMapping(path = "{userId}") 
	public void putUsuario(@PathVariable("userId") Long userId,
			@RequestParam(required = false) String nombre, 
			@RequestParam(required = false) String apellido,
			@RequestParam(required = false) String correo,
			@RequestParam(required = false) String password,
			@RequestParam(required = false) String telefono,
			@RequestParam(required = false) Long direccion_id) {
		usuarioSer.actualizarUsuario(userId, nombre, apellido, correo, password, telefono, direccion_id);
	}
	
//	DELETE
	@DeleteMapping(path = "{userId}")
	public void deleteUsuario(@PathVariable("userId") Long userId) {
		usuarioSer.borrarUsuario(userId);
	}
}

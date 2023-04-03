package generation.javongus.html.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import generation.javongus.html.model.Direccion;
import generation.javongus.html.model.Usuario;
import generation.javongus.html.model.UsuarioDireccionDTO;
import generation.javongus.html.repository.DireccionRepository;
import generation.javongus.html.repository.UsuarioRepository;

@Service
public class UsuarioServices {
//	Instancia usuario
	private final UsuarioRepository usuarioRe;
	private final DireccionRepository direccionRe;

	@Autowired
	public UsuarioServices(UsuarioRepository usuarioRe, DireccionRepository direccionRe) {
		this.usuarioRe = usuarioRe;
		this.direccionRe = direccionRe;
	}
	
	
//	CREATE
	public void crearUsuario(Usuario usuario) {
		Optional <Usuario> usuarioByCorreo = 
				usuarioRe.findByCorreo(usuario.getCorreo());
		if (usuarioByCorreo.isPresent()) {
			throw new IllegalStateException("No se puede repetir el correo");
		}else {
			usuarioRe.save(usuario);
		}

	}
//	crear usuario con dirección al mismo tiempo
	public void createUsuarioWithDireccion(UsuarioDireccionDTO usuarioDireccionDTO) {
		Usuario usuario = usuarioDireccionDTO.getUsuario();
	    Direccion direccion = usuarioDireccionDTO.getDireccion();
	    
		Direccion direccionExistente = buscarDireccionExistente(direccion);
	    if (direccionExistente != null) {
	      usuario.getDirecciones().add(direccionExistente);
	    } else {
	      direccion = direccionRe.save(direccion);
	      usuario.getDirecciones().add(direccion);
	    }
	    usuarioRe.save(usuario);
    }
//	//////////////////////////////////////////////////////+
	
//	////// auxiliar /////////////////////////////////////////
	private Direccion buscarDireccionExistente(Direccion direccion) {
	    List<Direccion> direcciones = direccionRe
	        .buscarPorAtributosIgnorandoMayusculas(direccion.getCalle(), direccion.getColonia(), direccion.getCp(), direccion.getEstado(), direccion.getMunicipio());
	    if (!direcciones.isEmpty()) {
	      return direcciones.get(0);
	    }
	    return null;
	}

	//	/////////////////////////////////////////////////////////
	
//	READ
	public List<Usuario> leerUsuarios() {
		return usuarioRe.findAll();
	}
	public Usuario leerUsuario(Long id) {
		return usuarioRe.findById(id).orElseThrow(()-> new IllegalStateException("El usuario"
				+ "con el id" +id+  " no existe"));
	}
	
//	UPDATE
	public void actualizarUsuario(Long userId,String nombre, String apellido, String correo, String password,
			String telefono, Long direccion_id) {
		if(usuarioRe.existsById(userId)) {
//			Esta onda es una función vieja que talvez no se debería de usar
			@SuppressWarnings("deprecation")
			Usuario usuarioABuscar = usuarioRe.getById(userId);
			if(nombre!= null) usuarioABuscar.setNombre(nombre);
			if(apellido!= null) usuarioABuscar.setNombre(apellido);
			if(correo!= null) usuarioABuscar.setNombre(correo);
			if(password!= null) usuarioABuscar.setNombre(password);
			if(telefono!= null) usuarioABuscar.setNombre(telefono);
			if(direccion_id!=null) {
				if(direccionRe.existsById(direccion_id)) {
					@SuppressWarnings("deprecation")
					Direccion direccion = direccionRe.getById(direccion_id);
					usuarioABuscar.getDirecciones().add(direccion);
				}else {
					System.out.println("La dirección no existe");
				}
			}
	        usuarioRe.save(usuarioABuscar);

		}else {
			System.out.println("El usuario con el id "+userId+" no existe");
		}
	}
	
//	DELETE
	public void borrarUsuario(Long id) {
		if(usuarioRe.existsById(id)) {
			usuarioRe.deleteById(id);
		}else {
			System.out.println("El usuario con el id "+id+" no existe");
		}
	}
	
}

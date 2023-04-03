package generation.javongus.html.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import generation.javongus.html.model.Direccion;
import generation.javongus.html.repository.DireccionRepository;

@Service
public class DireccionServices {
//	Instancia
	private final DireccionRepository direccionRe;

	@Autowired
	public DireccionServices(DireccionRepository direccionRe) {
		this.direccionRe = direccionRe;
	}
	
//	CREATE
	public void crearDireccion(Direccion direccion) {
		direccionRe.save(direccion);
	}
	
//	READ
	public List<Direccion> leerDirecciones() {
		return direccionRe.findAll();
	}
	public Direccion leerDireccion(Long id) {
		return direccionRe.findById(id).orElseThrow(()-> new IllegalStateException("La direccion "
				+ "con el id " +id+  " no existe"));
	}
	
//	UPDATE (PENDIENTE)
//	DELETE
	public void borrarDireccion(Long id) {
		if(direccionRe.existsById(id)) {
			direccionRe.deleteById(id);
		}else {
			System.out.println("La dirección con el id "+id+" no existe");
		}
	}
	
}

package generation.javongus.html.repository;

import java.util.List;
//import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import generation.javongus.html.model.Producto;

public interface ProductoRespository extends JpaRepository<Producto, Long>{
		
//	Buscar producto por nombre: 
	@Query("SELECT p FROM Producto p WHERE p.nombre=?1")
	Optional<Producto> findByNombre(String nombre);
	
//	Buscar entre precios
	@Query("SELECT p FROM Producto p WHERE p.precio BETWEEN :start AND :end")
	List<Producto> findByPrecioBetween(@Param("start") Double start, @Param("end") Double end);
	
//	Buscar en orden 
	@Query("SELECT p FROM Producto p ORDER BY p.precio ASC")
	List<Producto> findAllOrderedA();
	
	@Query("SELECT p FROM Producto p ORDER BY p.precio DESC")
	List<Producto> findAllOrderedD();
//	/////////////////////////////////////////////////////////////
	
//	Buscar por marca
	@Query("SELECT p FROM Producto p WHERE p.marca_id=?1")
	List<Producto> findByMarca(Long marca_id);
	
//	Buscar por tipo
	@Query("SELECT p FROM Producto p WHERE p.tipo=?1")
	List<Producto> findByTipo(String tipo);
	
//	Buscar por target
	@Query("SELECT p FROM Producto p WHERE p.target=?1")
	List<Producto> findByTarget(Integer target);
	
	
}

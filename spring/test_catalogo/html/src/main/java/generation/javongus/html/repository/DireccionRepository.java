package generation.javongus.html.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import generation.javongus.html.model.Direccion;



public interface DireccionRepository extends JpaRepository<Direccion, Long> {
	  @Query(value = "SELECT * FROM direcciones WHERE LOWER(calle) = LOWER(:calle) AND LOWER(colonia) = LOWER(:colonia) AND cp = :cp AND LOWER(estado) = LOWER(:estado) AND LOWER(municipio) = LOWER(:municipio)", nativeQuery = true)
	  List<Direccion> buscarPorAtributosIgnorandoMayusculas(@Param("calle") String calle, @Param("colonia")String colonia, @Param("cp")Integer cp,@Param("estado") String estado,@Param("municipio") String municipio);
}

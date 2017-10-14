package pl.waw.lokalsi.initiative.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.waw.lokalsi.initiative.model.Initiative;

/**
 * Created by konrad on 14.10.2017.
 */
@Repository
public interface InitiativeRepository extends JpaRepository<Initiative, Long> {
}
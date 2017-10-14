package pl.waw.zrobmy.idea.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.waw.zrobmy.idea.model.Initiative;

/**
 * Created by konrad on 14.10.2017.
 */
@Repository
public interface InitiativeRepository extends JpaRepository<Initiative, Long> {
}
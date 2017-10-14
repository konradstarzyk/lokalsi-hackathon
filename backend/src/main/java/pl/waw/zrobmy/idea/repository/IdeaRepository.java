package pl.waw.zrobmy.idea.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by konrad on 14.10.2017.
 */
@Repository
public interface IdeaRepository extends JpaRepository<Idea, Long> {
}
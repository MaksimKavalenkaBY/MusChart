package by.gsu.database.editor;

import static by.gsu.constants.ExceptionConstants.CLOSE_SESSION_ERROR;
import static by.gsu.constants.ExceptionConstants.COMMIT_TRANSACTION_ERROR;
import static by.gsu.constants.ExceptionConstants.OPEN_SESSION_ERROR;

import org.hibernate.HibernateException;
import org.hibernate.Session;

import by.gsu.database.dao.IDAO;
import by.gsu.exception.ValidationException;
import by.gsu.hibernate.HibernateUtil;

public abstract class DatabaseEditor implements IDAO {

    protected Session session;

    public DatabaseEditor() throws ValidationException {
        try {
            session = HibernateUtil.getSessionFactory().openSession();
        } catch (HibernateException e) {
            throw new ValidationException(OPEN_SESSION_ERROR);
        }
    }

    @Override
    public void close() throws ValidationException {
        try {
            session.close();
        } catch (HibernateException e) {
            throw new ValidationException(CLOSE_SESSION_ERROR);
        }
    }

    protected void save(final Object object) throws ValidationException {
        try {
            session.beginTransaction();
            session.save(object);
            session.getTransaction().commit();
        } catch (HibernateException e) {
            session.getTransaction().rollback();
            throw new ValidationException(COMMIT_TRANSACTION_ERROR);
        }
    }

    protected void delete(final Object object) throws ValidationException {
        try {
            session.beginTransaction();
            session.delete(object);
            session.getTransaction().commit();
        } catch (HibernateException e) {
            session.getTransaction().rollback();
            throw new ValidationException(COMMIT_TRANSACTION_ERROR);
        }
    }

}

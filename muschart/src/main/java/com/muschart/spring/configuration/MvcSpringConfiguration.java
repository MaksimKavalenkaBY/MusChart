package com.muschart.spring.configuration;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.jpa.HibernatePersistenceProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.muschart.service.dao.ArtistServiceDAO;
import com.muschart.service.dao.GenreServiceDAO;
import com.muschart.service.dao.RoleServiceDAO;
import com.muschart.service.dao.TrackServiceDAO;
import com.muschart.service.dao.UnitServiceDAO;
import com.muschart.service.dao.UserServiceDAO;
import com.muschart.service.impl.ArtistService;
import com.muschart.service.impl.GenreService;
import com.muschart.service.impl.RoleService;
import com.muschart.service.impl.TrackService;
import com.muschart.service.impl.UnitService;
import com.muschart.service.impl.UserService;

@Configuration
@ComponentScan("com.muschart.spring.component")
@EnableJpaRepositories(basePackages = "com.muschart.jpa.repository")
@EnableTransactionManagement
public class MvcSpringConfiguration extends WebMvcConfigurationSupport {

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost/muschart");
        dataSource.setUsername("maks");
        dataSource.setPassword("111");
        return dataSource;
    }

    @Bean
    public StandardServletMultipartResolver multipartResolver() {
        return new StandardServletMultipartResolver();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactoryBean.setDataSource(dataSource());
        entityManagerFactoryBean.setPersistenceProviderClass(HibernatePersistenceProvider.class);
        entityManagerFactoryBean.setPackagesToScan("com.muschart.entity");
        entityManagerFactoryBean.setJpaProperties(getHibernateProperties());
        return entityManagerFactoryBean;
    }

    @Bean
    public JpaTransactionManager transactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return transactionManager;
    }

    @Bean
    public ArtistServiceDAO artistService() {
        return new ArtistService();
    }

    @Bean
    public GenreServiceDAO genreService() {
        return new GenreService();
    }

    @Bean
    public RoleServiceDAO roleService() {
        return new RoleService();
    }

    @Bean
    public TrackServiceDAO trackService() {
        return new TrackService();
    }

    @Bean
    public UnitServiceDAO unitService() {
        return new UnitService();
    }

    @Bean
    public UserServiceDAO userService() {
        return new UserService();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
        registry.addResourceHandler("/**").addResourceLocations("/static/");
        registry.addResourceHandler("/audio/**")
                .addResourceLocations("file:///C:/ServerData/muschart/audio/");
        registry.addResourceHandler("/image/artist/**")
                .addResourceLocations("file:///C:/ServerData/muschart/image/artist/");
        registry.addResourceHandler("/image/track/**")
                .addResourceLocations("file:///C:/ServerData/muschart/image/track/");
    }

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/html/");
        viewResolver.setSuffix(".html");
        registry.viewResolver(viewResolver);
    }

    private Properties getHibernateProperties() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
        properties.put("hibernate.show_sql", "false");
        properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.id.new_generator_mappings", "false");
        return properties;
    }

}

package com.maryanto.dimas.resource.mits.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;

@Configuration
@EnableResourceServer
public class ResourceServerApplication extends ResourceServerConfigurerAdapter {

    @Value("${oauth2.resource_id}")
    private String resourceId;
    @Value("${oauth2.client_id}")
    private String clientId;
    @Value("${oauth2.client_secret}")
    private String clientSecret;
    @Value("${oauth2.check_token.uri}")
    private String authCheckTokenUri;

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        RemoteTokenServices tokenService = new RemoteTokenServices();
        tokenService.setClientId(clientId);
        tokenService.setClientSecret(clientSecret);
        tokenService.setCheckTokenEndpointUrl(authCheckTokenUri);

        resources
                .resourceId(resourceId)
                .tokenServices(tokenService);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/api/user").hasRole("USER");

    }
}

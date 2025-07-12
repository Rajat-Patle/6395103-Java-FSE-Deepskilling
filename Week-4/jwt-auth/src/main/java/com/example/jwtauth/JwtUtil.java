package com.example.jwtauth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256); // Generates a secure key

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuer("jwt-auth-app")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000)) // 1 hour expiry
                .signWith(key, SignatureAlgorithm.HS256) // Fixed here!
                .compact();
    }
}

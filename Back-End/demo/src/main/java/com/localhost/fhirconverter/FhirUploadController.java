package com.localhost.fhirconverter;

import com.localhost.fhirconverter.FhirUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/api")
public class FhirUploadController {

    @Autowired
    private FhirUploadService fhirUploadService;

    @PostMapping("/upload-fhir-bundle")
    public ResponseEntity<String> uploadFhirBundle(MultipartFile file, String projectId, String region, String datasetName, String storeName) {
        try {
            String response = fhirUploadService.fhirStoreExecuteBundle(file, projectId, region, datasetName, storeName);
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to upload FHIR bundle: " + e.getMessage());
        }
        catch (URISyntaxException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to upload FHIR bundle: " + e.getMessage());
        }
    }
}

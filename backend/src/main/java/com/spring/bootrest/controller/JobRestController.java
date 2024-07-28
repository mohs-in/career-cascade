package com.spring.bootrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import com.spring.bootrest.model.JobPost;
import com.spring.bootrest.service.JobService;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class JobRestController {
	
	@Autowired
	private JobService service;

	@GetMapping("/")
	public ResponseEntity<Resource> getIndexHtml() {
		Resource resource = new ClassPathResource("webapp/index.html");

		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_TYPE, "text/html")
				.body(resource);
	}

	@GetMapping("jobPosts")
	public List<JobPost> getAllJobs() {
		return service.getAllJobs();
	}

	@GetMapping("jobPost/{postId}")
	public JobPost getJob(@PathVariable int postId) {
		return service.getJob(postId);
	}

	@PostMapping("jobPost")
	public JobPost addJobPost(@RequestBody JobPost jobPost) {
		service.addJobPost(jobPost);
		return service.getJob(jobPost.getPostId());
	}

	@PutMapping("jobPost")
	public JobPost updateJob(@RequestBody JobPost jobPost) {
		return service.updateJob(jobPost);
	}

	@DeleteMapping("jobPost/{postId}")
	public String deleteJob(@PathVariable int postId) {

		service.deleteJob(postId);
		return "Deleted";

	}

	@GetMapping("load")
	public String loadData() {
		service.load();
		return "success";
	}

	@GetMapping("jobPosts/keyword/{keyword}")
	public List<JobPost> searchByKeyword(@PathVariable String keyword) {
		return service.search(keyword);
	}

}

package APITest;

import static io.restassured.RestAssured.basePath;
import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;

import org.junit.BeforeClass;
import org.junit.Test;


public class APITest {

	@BeforeClass
	public static void urlSetup() {
		baseURI = "https://reqres.in";
		basePath = "/api";
	}

	
	@Test
	public void registerSuccessful() {
		
		given()
			.contentType("application/json")
			.body("{\"email\": \"eve.holt@reqres.in\",\"password\": \"pistol\"}")
		.when()
			.post("/register")
		.then()
			.log().all()
			.statusCode(200)
			.body("token", is("QpwL5tke4Pnpja7X4"));
	}
	
	
	@Test
	public void loginSuccessful() {
		
		given()
			.contentType("application/json")
			.body("{\"email\": \"eve.holt@reqres.in\",\"password\": \"cityslickal\"}")
		.when()
			.post("/login")
		.then()
			.log().all()
			.statusCode(200)
			.body("token", is("QpwL5tke4Pnpja7X4"));
	}
}

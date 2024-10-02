/* -------------------------
  SHARED CONTEXT
---------------------------- */

CREATE TABLE shared__failover_domain_events (
	id INT AUTO_INCREMENT PRIMARY KEY,
	eventId UUID NOT NULL,
	eventName VARCHAR(255) NOT NULL,
	body TEXT NOT NULL
);

/* -------------------------
        SHOP CONTEXT
---------------------------- */

CREATE TABLE shop__users (
	id UUID PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	profile_picture VARCHAR(255)
);


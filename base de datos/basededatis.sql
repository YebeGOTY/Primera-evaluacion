CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    comment TEXT NOT NULL,
    ip_address TEXT NOT NULL,
    created_at TEXT NOT NULL
);

CREATE TABLE payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    card_holder_name TEXT NOT NULL,
    card_number TEXT NOT NULL,
    expiration_month TEXT NOT NULL,
    expiration_year TEXT NOT NULL,
    cvv TEXT NOT NULL,
    amount REAL NOT NULL,
    currency TEXT NOT NULL,
    created_at TEXT NOT NULL
);

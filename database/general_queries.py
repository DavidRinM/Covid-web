drop_tables = {
    'drop_gender_type': "DROP TABLE IF EXISTS gender_type",
    'drop_patient_type':  "DROP TABLE IF EXISTS patient_type",
    'drop_general_table': "DROP TABLE IF EXISTS general"
}


create_table_queries = {
    'gender_type': """
                CREATE TABLE gender_type 
                (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL , 
                    gender varchar(10) NOT NULL
                )
                """,
    'patient_type': """
                CREATE TABLE patient_type
                (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
                    type varchar(20) NOT NULL 
                )
                """,
    "general_table": """
                CREATE TABLE general
                (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
                    gender INTEGER NOT NULL, 
                    type INTEGER NOT NULL,
                    income_date VARCHAR(10) NOT NULL, 
                    initial_symptom_date VARCHAR(10) NOT NULL,
                    death_date VARCHAR(10) NOT NULL, 
                    age INTEGER NOT NULL
                )      
                """
}

insert_values_in_catalogs = {
    'gender_values': """
                    INSERT INTO gender_type(
                        gender
                    ) VALUES (
                        'women'
                    ), 
                    (
                        'man'
                    )
                    """,
    'patient_type_values': """
                    INSERT INTO patient_type(
                        type
                    ) VALUES (
                        'ambulatorios'
                    ), 
                    (
                        'hospitalizados' 
                    )
                    """
}

<script>
const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const cTable = require('console.table');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Element1!',
      database: 'login'
    },
    //console.log('Connected to the employee database.')
  );


  db.query(`SELECT * FROM entry`, (err, rows) => {
    console.table(rows);
  });

      //assigning id to next id after last one
      //var id=sqlIdDepartment +1;
      //add id to sql
      //add department to sql





</script>




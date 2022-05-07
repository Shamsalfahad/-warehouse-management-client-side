import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="p-2">
          <h4>Difference between javascript and nodejs</h4>
          <p>
            JavaScripts is a programing language, which can run any web browser.
            On the other hand node js is an interpreter and environment for java
            Script. javaScript can run on any engine like Spider monkey , safari
            v8, chrome etc. Node js only can run in V8 engine which is mainly
            using by google chrome.javaScript mainly using any client side
            activity for a web application. Node js mainly use for accessing or
            performing any non-blocking operation of any operating system
          </p>
        </div>
        <div className="p-2">
          <h4>Differences between sql and nosql databases.</h4>
          <p>
            There are some Difference between SQL and NoSQL. SQl database are
            relational, on the other hand NoSQL database are non-relational. SQL
            database use structured query language and have a schema. NoSQL
            database have dynamic schema for understand data. SQl database are
            vertically scalable, by the opposite NoSQL databases are
            horizontally scalable. SQL databases are table-based, where as NoSQL
            databases are document, key-value, graph.SQL databases are better
            for multi-row transactions, where as NoSQL is better for
            unstructured data like documents.
          </p>
        </div>
        <div className="p-2 ">
          <h4>What is the purpose of jwt and how does it work</h4>
          <p>
            JWT , or JSON web token, is an open standard used to share security
            information between two parties, an client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. so we can say using JWT
            is more secure for an user. we should is this for maintain security
            on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

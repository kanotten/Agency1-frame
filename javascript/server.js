const jsonString = `{
  "posts": [
    { "id": 1, "title": "Post 1", "content": "Content of Post 1", "category": "wedding","image_path": "assets/wedding/g-1001.jpg"},
    { "id": 2, "title": "Post 2", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 3, "title": "Post 3", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 4, "title": "Post 4", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 5, "title": "Post 5", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 6, "title": "Post 6", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 7, "title": "Post 7", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 8, "title": "Post 8", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 9, "title": "Post 9", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 10, "title": "Post 10", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 11, "title": "Post 11", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 12, "title": "Post 12", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 13, "title": "Post 13", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 14, "title": "Post 14", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 15, "title": "Post 15", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 16, "title": "Post 16", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 17, "title": "Post 17", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"},
    { "id": 18, "title": "Post 18", "content": "Content of Post 2", "category": "tinder", "image_path": "images/product1.jpg"}
  ]
}`;
  

  const jsonObject = JSON.parse(jsonString);
  

  jsonObject.posts.forEach(id => {
    console.log("Title:", id.title);
    console.log("Content:", id.content);
    console.log("Category:", id.category);
    console.log("Image:", id.image_path);
  });

  
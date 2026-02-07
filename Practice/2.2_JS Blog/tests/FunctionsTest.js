describe('Blog class', function() {
  it('should create an h1 element with the title when addTitle() is called', function() {
    const blog = new Blog('Test Blog Title', 'This is a test blog description.');
    blog.addTitle(); // Call the method to add the title
    
    const titleElement = document.getElementById('blog-title');
    expect(titleElement).not.toBeNull();
    expect(titleElement.tagName).toBe('H1');
    expect(titleElement.innerHTML).toBe('Test Blog Title');
  });

  it('should create a p element with the description when addDescription() is called', function() {
    const blog = new Blog('Test Blog Title', 'This is a test blog description.');
    blog.addDescription(); // Call the method to add the description
    
    const descriptionElement = document.getElementById('blog-description');
    expect(descriptionElement).not.toBeNull();
    expect(descriptionElement.tagName).toBe('P');
    expect(descriptionElement.innerHTML).toBe('This is a test blog description.');
  });
});



describe('Contact List Application with Promises', () => {
  const mockUsers = [
    {
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: { name: 'Romaguera-Crona' },
      address: { city: 'Gwenborough', zipcode: '92998-3874' },
    },
  ];

  const newUsers = [
    {
      name: 'New User 1',
      email: 'newuser1@example.com',
      phone: '123-456-7890',
      website: 'newuser1.com',
      company: { name: 'New Company 1' },
      address: { city: 'New City 1', zipcode: '12345' },
    },
    {
      name: 'New User 2',
      email: 'newuser2@example.com',
      phone: '234-567-8901',
      website: 'newuser2.com',
      company: { name: 'New Company 2' },
      address: { city: 'New City 2', zipcode: '23456' },
    },
    {
      name: 'New User 3',
      email: 'newuser3@example.com',
      phone: '345-678-9012',
      website: 'newuser3.com',
      company: { name: 'New Company 3' },
      address: { city: 'New City 3', zipcode: '34567' },
    },
  ];

  // Utility function to set up the DOM
  function setupDOM() {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    document.body.appendChild(messageDiv);
  }

  // Utility function to tear down the DOM
  function teardownDOM() {
    const messageDiv = document.getElementById('message');
    if (messageDiv && messageDiv.parentNode) {
      messageDiv.parentNode.removeChild(messageDiv);
    }
  }

  // Clear users before each test to avoid email collisions
  beforeEach(() => {
    users.length = 0;
  });

  // Test case 1: Check if fetchUsers returns a promise
  it('should return a promise from fetchUsers', (done) => {
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockUsers),
      })
    );

    const result = fetchUsers();
    expect(result).toEqual(jasmine.any(Promise));

    result
      .then(() => {
        expect(users).toEqual(mockUsers);
        done();
      })
      .catch((error) => {
        done.fail('Failed to fetch users: ' + error);
      });
  });

  // Test case 2: Check if displayUsers displays the correct HTML
  it('should display user data as HTML', () => {
    setupDOM();

    users.push(...mockUsers);
    displayUsers();

    const messageElement = document.getElementById('message');
    expect(messageElement.innerHTML).toContain('Name : Leanne Graham');
    teardownDOM();
  });

  // Test case 3: Check if createUser returns a promise and adds the user
  it('should return a promise and add a new user', (done) => {
    const initialLength = users.length;
    const result = originalCreateUser(newUsers[0]);

    expect(result).toEqual(jasmine.any(Promise));

    result
      .then(() => {
        expect(users.length).toBe(initialLength + 1);
        expect(users).toContain(jasmine.objectContaining(newUsers[0]));
        done();
      })
      .catch((error) => {
        done.fail('Failed to add new user: ' + error);
      });
  });

  // Test case 4: Check if originalCreateUser cycles through new users and adds them to the users array
  it('should add all new users to the users array without duplicates', (done) => {
    let promise = Promise.resolve();

    newUsers.forEach((newUser) => {
      promise = promise.then(() => originalCreateUser(newUser));
    });

    promise
      .then(() => {
        expect(users.length).toBe(newUsers.length);
        newUsers.forEach((newUser) => {
          expect(users).toContain(jasmine.objectContaining(newUser));
        });
        done();
      })
      .catch((error) => {
        done.fail('Failed to add multiple users: ' + error);
      });
  });

  // Restore createUser function if modified
  afterEach(() => {
    createUser = jasmine.createSpy().and.callFake(originalCreateUser);
  });
});

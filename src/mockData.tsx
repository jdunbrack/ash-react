// Mock Members
const mockMembers = [
    {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        password: "abcxyz",
        avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_44813671_portrait-of-a-handsome-smiling-man-looking-at-the-camera.html&psig=AOvVaw01NTMl1baGM1brQMsnZyGN&ust=1616275602288000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCMDe0Pulve8CFQAAAAAdAAAAABAD",
        groupId: 0
    },
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@email.com",
        password: "xyzabc",
        avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photo%2Fcloseup-smiling-woman-making-frame-gesture_999213.htm&psig=AOvVaw2JZ8DXFYBaKBObviE6JpZj&ust=1616275627697000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCIi-qYmmve8CFQAAAAAdAAAAABAD",
        groupId: 0
    },
    {
        id: 2,
        firstName: "Jack",
        lastName: "Roommate",
        email: "theroommate@email.com",
        password: "password",
        avatar: null,
        groupId: 0
    }
]

// Mock Group
const mockGroup = {
    id: 0,
    name: "Home Sweet HomeGroup",
    owner: 0,
    members: [0, 1, 2],
    inviteCode: "invitE"
}

// Mock Transactions
mockTransactions = [
    {
        amount: 20,
        vendor: "Target",
        description: "Snacks",
        purchaserId: 1,
        contributorId: 0,
        paid: false
    },
    {
        amount: 20,
        vendor: "Target",
        description: "Snacks",
        purchaserId: 1,
        contributorId: 2,
        paid: false
    },
    {
        amount: 50,
        vendor: "Costco",
        description: "Beer",
        purchaserId: 0,
        contributorId: 2,
        paid: false
    },
    {
        amount: 120,
        vendor: "PG&E",
        description: "Electricity",
        purchaserId: 0,
        contributorId: 1,
        paid: false
    },
    {
        amount: 20,
        vendor: "PG&E",
        description: "Electricity",
        purchaserId: 0,
        contributorId: 2,
        paid: false
    }
]

// Mock Tasks
mockTasks = [
    {
        name: "Dishes",
        description: "Empty/fill every other day",
        worker: 0,
        groupId: 0,
    },
    {
        name: "Dishes",
        description: "Empty/fill every other day",
        worker: 1,
        groupId: 0,
    },
    {
        name: "Dishes",
        description: "Empty/fill every other day",
        worker: 2,
        groupId: 0,
    },
    {
        name: "Trim hedges",
        description: "Can't let them get in the neighbor's yard!",
        worker: 0,
        groupId: 0,
    },
    {
        name: "Bake cake for John's birthday",
        description: "Surprise!",
        worker: 1,
        groupId: 0,
    },
]

module.exports = {
    mockGroup,
    mockMembers,
    mockTransactions,
    mockTasks,
}
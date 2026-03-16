## Learning Goals
In this exercise, the aim is to understand the following hooks:
- useMemo
- useCallback


## Task:
Initially, you will see the application running in the following manner -
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd7.gif)

And if you open you console, you will see the console, in the following way -
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd8.gif)


NOTE: You must have observed, the delay while clicking on the dark and change value button. You must have observed that, when you change the background color, there is a delay.

Your task is to optimize the given code, and remove the delay - as shown below:

![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd9.gif)

NOTE: You must have also observed, that initially, in your console, if you click any button --> Delay function ran and callback function was called --> these two text message get consoled everytime you click any of the three buttons.

Your task is to optimize the code in such a way --> that these two texts : Delay function ran and callback function was called, only appear in console, when you click on change value  button - as shown below:

![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd10.gif)

Use `npm run test:serve` to visualise test cases

Happy Coding ❤️!
import { HelloWorldService } from "./services/hello-world.service";

const main = () => {
  const helloWorldService = new HelloWorldService();
  helloWorldService.sayHello();
  console.log("Hello World");
};

main();

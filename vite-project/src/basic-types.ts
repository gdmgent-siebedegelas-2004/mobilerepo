export const basicTypes = {
  runDemos: () => {
    // string
    const myName: string = "Siebe";

    // boolean
    const isOpen: boolean = true;

    // number
    const myAge: number = 10.5;

    // array
    const list: number[] = [1, 2, 3];

    // tuple
    const tuple: [number, string, number] = [1, "2", 3];

    // enum
    enum Job {
      WebDev,
      WebDesigner,
      PM,
    }
    const myProfession: Job = Job.WebDesigner;
    console.log(myProfession);
  },
};

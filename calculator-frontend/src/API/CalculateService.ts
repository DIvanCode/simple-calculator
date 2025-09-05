// import axios from "axios";

export default class CalculateService {
  static async calculate(expr: string): Promise<{ data: { result: string } }> {
    //return await axios.post("/api/calculate", { expr });
    // TODO: mocked for now
    return await new Promise<{ data: { result: string } }>((resolve) =>
      setTimeout(() => {
        resolve({
          data: {
            result: String(eval(expr)),
          },
        });
        // reject(new Error("Something went wrong"));
      }, 2000)
    );
  }

  static async getHistory() {
    console.log(`TODO: get history`);
  }
}

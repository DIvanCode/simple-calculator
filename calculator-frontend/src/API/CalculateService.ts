// import axios from "axios";

type HistoryItem = {
  expr: string;
  res: string;
};

export default class CalculateService {
  static async calculate(expr: string): Promise<{ data: { res: string } }> {
    //return await axios.post("/api/calculate", { expr });

    // TODO: mocked for now
    console.warn('[MOCK] Mocking calculation...');
    return await new Promise<{ data: { res: string } }>((resolve) =>
      setTimeout(() => {
        resolve({
          data: {
            res: String(eval(expr)),
          },
        });
        // reject(new Error("Something went wrong")); // uncomment & add reject to func to mock error
      }, 2000),
    );
  }

  static async getHistory(): Promise<{ data: { history: HistoryItem[] } }> {
    // return await axios.get("/api/history");
    // TODO: mocked for now
    console.warn('[MOCK] Mocking history...');
    return await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: {
              history: [
                { expr: '1+1', res: '2222222222222222222222222222222222' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
                { expr: '1+1', res: '2' },
              ],
            },
          }),
        2000,
      ),
    );
  }
}

    const power = (x, n) => {
        let result = x;
      
        for (let i = 1; i < n; i++) {
        result *= x;
      }
          return result;
      };
      power (4, 5)
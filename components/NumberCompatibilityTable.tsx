import { NumberCompatibility } from "@/libs/numerology";

export const NumberCompatibilityTable = ({
  numberCompatibility,
}: {
  numberCompatibility: NumberCompatibility;
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table text-lg text-center">
        <thead>
          <tr className="text-lg text-center">
            <th>Categoria</th>
            <th>Números</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>Alma gêmea (energia mais harmônica)</td>
            <td>{numberCompatibility.soulmate.join(", ")}</td>
          </tr>
          <tr className="hover">
            <td>Energias desarmônicas</td>
            <td>{numberCompatibility.enemies.join(", ")}</td>
          </tr>
          <tr className="hover">
            <td>Energias harmônicas</td>
            <td>{numberCompatibility.friends.join(", ")}</td>
          </tr>
          {numberCompatibility.loveAndHates.length > 0 && (
            <tr className="hover">
              <td>Podem estar harmônia ou desarmonia</td>
              <td>{numberCompatibility.loveAndHates.join(", ")}</td>
            </tr>
          )}
          {numberCompatibility["66And33"].length > 0 && (
            <tr className="hover">
              <td>66% harmônia e 33% desarmonia</td>
              <td>{numberCompatibility["66And33"].join(", ")}</td>
            </tr>
          )}
          {numberCompatibility.syphonsEnergyFrom && (
            <tr className="hover">
              <td>Você &quot;rouba&quot; energia do número</td>
              <td>{numberCompatibility.syphonsEnergyFrom}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

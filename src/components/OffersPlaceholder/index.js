import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react'

function SearchBarInput() {
  return (
    <Card.Group itemsPerRow={3}>
      <Card>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Placeholder>
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default SearchBarInput;

<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    public function test_something()
    {
        $this->assertEquals(1337, 1337);
    }

    public function test_assert_is_array()

    {
        $variable = [1, 2, [3, 4]];

        $this->assertIsArray($variable,"assert variable is array or not");
    }

    public function test_assert_is_only_integers()
    {
        $variable = [1, 2, [3, 4]];

        $flattened = flatten($variable);

        $this->assertContainsOnly('integer', $flattened);
    }

    public function test_array_has_string()
    {
        $variable = flatten([1, 2, ['Test', 4]]);

        $this->assertNotContainsOnly('integer', $variable);
    }
    
}
<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {

    
    public function test_something() {
        $this->assertEquals(42, 42);
    }
    
    public function test_is_value_added()
    {
        $tempTracker = new TempTracker();
        
        for ($x = 0; $x < 7; $x++) {
            $tempTracker->insert(rand(5, 35));
        }

        $this->assertNotEmpty($tempTracker->get_temps());
    }

    public function test_is_max()
    {
        $tempTracker = new TempTracker();
        
        for ($x = 0; $x < 7; $x++) {
            $tempTracker->insert(rand(5, 35));
        }

        $max = max($tempTracker->get_temps());

        $this->assertEquals($max, $tempTracker->get_max());
    }

    public function test_is_min()
    {
        $tempTracker = new TempTracker();
        
        for ($x = 0; $x < 7; $x++) {
            $tempTracker->insert(rand(5, 35));
        }

        $min = min($tempTracker->get_temps());

        $this->assertEquals($min, $tempTracker->get_min());
    }

    public function test_is_mean()
    {
        $tempTracker = new TempTracker();

        $sum = 0;
        for ($x = 0; $x < 7; $x++) {
            $temp = rand(5, 35);
            $tempTracker->insert($temp);
            $sum += $temp;
        }
        $avg = ($sum / count($tempTracker->get_temps()));

        $this->assertEquals($avg, $tempTracker->get_mean());

    }
}
